import { useTranslation } from 'react-i18next';
import NxWelcome from './nx-welcome';

export function App() {
  const { i18n } = useTranslation();

  const handleChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    i18n.changeLanguage(value);
    localStorage.setItem('lang', value);
  };
  return (
    <div>
      <div className="mx-auto max-w-3xl px-4">
        <select
          name="lang"
          id="lang"
          onChange={handleChangeLang}
          value={localStorage.getItem('lang') || 'en'}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="ge">Germany</option>
        </select>
      </div>
      <NxWelcome />
    </div>
  );
}

export default App;
