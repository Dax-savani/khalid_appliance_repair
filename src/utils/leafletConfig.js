// utils/leafletConfig.js

if (typeof window !== 'undefined') {
    // Dynamically import leaflet only on the client
    import('leaflet').then(L => {
        import('leaflet/dist/leaflet.css');
        import('leaflet/dist/images/marker-icon-2x.png').then(icon2x => {
            import('leaflet/dist/images/marker-icon.png').then(icon => {
                import('leaflet/dist/images/marker-shadow.png').then(shadow => {
                    delete L.Icon.Default.prototype._getIconUrl;

                    L.Icon.Default.mergeOptions({
                        iconRetinaUrl: icon2x.default,
                        iconUrl: icon.default,
                        shadowUrl: shadow.default,
                    });
                });
            });
        });
    });
}
