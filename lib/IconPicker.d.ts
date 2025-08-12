/**
 * Inicjalizuje IconPicker na podanym selektorze elementu input/triggera
 * @param selector - CSS selektor elementu, który ma uruchamiać picker
 * @param onIconSelected - Callback wywoływany po wyborze ikony
 */
export default function initializeIconPicker(selector: string, onIconSelected?: (iconClass: string) => void): void;
