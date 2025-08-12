import '@fortawesome/fontawesome-free/css/all.css';
import * as bootstrap from 'bootstrap';

/**
 * Inicjalizuje IconPicker na podanym selektorze elementu input/triggera
 * @param selector - CSS selektor elementu, który ma uruchamiać picker
 * @param onIconSelected - Callback wywoływany po wyborze ikony
 */
export default function initializeIconPicker(
  selector: string,
  onIconSelected?: (iconClass: string) => void
): void {
  console.log('Initializing IconPicker with selector:', selector);

  const targetElement = document.querySelector<HTMLInputElement>(selector);
  const popup = document.getElementById('iconPickerPopup') as HTMLElement | null;
  const iconList = document.getElementById('iconList') as HTMLElement | null;
  const closeButton = document.getElementById('closePopup') as HTMLElement | null;
  const selectedIconDisplay = document.getElementById('selectedIconDisplay') as HTMLElement | null;

  if (!targetElement || !popup || !iconList || !closeButton || !selectedIconDisplay) {
    console.error(
      'Nie znaleziono wszystkich wymaganych elementów HTML. Sprawdź czy dodałeś okno modal z #iconPickerPopup!'
    );
    return;
  }

  const modal = new bootstrap.Modal(popup, {
    keyboard: true,
    backdrop: true,
  });

  async function getIcons(): Promise<string[]> {
    try {
      console.log('Attempting to load JSON from: /fontawesome-free-all.json');
      const response = await fetch('fontawesome-free-all.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const faIcons = await response.json();
      console.log('JSON loaded:', faIcons);

      const iconsArray = Array.isArray(faIcons) ? faIcons : Object.values(faIcons);
      return iconsArray as string[];
    } catch (error) {
      console.error('Błąd ładowania ikon FontAwesome:', error);
      return [];
    }
  }

  function populateIconList(iconList: HTMLElement, iconNames: string[]): void {
    iconList.innerHTML = '';
    iconNames.forEach((iconName) => {
      const iconElement = document.createElement('div');
      iconElement.className = 'cursor-pointer p-2 rounded-md hover:bg-gray-200';
      iconElement.innerHTML = `<i class="${iconName} text-2xl"></i>`;
      iconElement.setAttribute('title', iconName);
      iconElement.dataset.icon = iconName;
      iconList.appendChild(iconElement);
    });
  }

  function showPopup(): void {
    modal.show();
  }

  function hidePopup(): void {
    modal.hide();
  }

  // Kliknięcie w trigger otwiera modal i ładuje ikony
  targetElement.addEventListener('click', async () => {
    const icons = await getIcons();
    populateIconList(iconList,icons);
    showPopup();
  });

  // Zamknięcie pickera
  closeButton.addEventListener('click', hidePopup);
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      hidePopup();
    }
  });

  // Wybór ikony z listy
  iconList.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement).closest<HTMLDivElement>('div[title]');
    if (target) {
      const selectedIconClass = target.getAttribute('title');
      if (selectedIconClass) {
        targetElement.value = selectedIconClass;
        selectedIconDisplay.innerHTML = `<i class="${selectedIconClass} text-2xl"></i>`;
        if (onIconSelected) {
          onIconSelected(selectedIconClass);
        }
        hidePopup();
      }
    }
  });
}
