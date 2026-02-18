import { useEffect } from 'react';

declare global {
    interface Window {
        gtag?: (
            command: string,
            targetId: string,
            config?: Record<string, any>
        ) => void;
    }
}

export const useSectionTracking = () => {
    useEffect(() => {
        // List of section IDs to track
        const sectionIds = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];

        // Create an intersection observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // If a section is more than 50% visible
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        const sectionId = entry.target.id;

                        // Format section title (e.g., 'projects' -> 'Projects')
                        const pageTitle = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
                        const pagePath = `/${sectionId === 'hero' ? '' : sectionId}`;

                        // Send event to Google Analytics
                        if (window.gtag) {
                            window.gtag('event', 'page_view', {
                                page_title: pageTitle,
                                page_location: window.location.origin + pagePath,
                                page_path: pagePath
                            });
                            // Optional: Log for debugging in development
                            if (import.meta.env.DEV) {
                                console.log(`📡 GA Tracking: ${pageTitle} (${pagePath})`);
                            }
                        }
                    }
                });
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.5 // Trigger when 50% visible
            }
        );

        // Start observing sections
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup
        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);
};

export default useSectionTracking;
