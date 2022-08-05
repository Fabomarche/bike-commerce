export const API_KEY_MAPS = 'AIzaSyCOgjL3usUx86pKRzOJmIK7xHI6Bao6AvA'

export const URL_GEOCODING = (lat, lng) => `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY_MAPS}`
