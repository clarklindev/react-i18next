import arm from "./clean-arm.jpg";
import "./App.css";

import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  "zh-TW": { nativeName: "Chinese" },
};

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <div className="tattoo">
          <img src={arm} className="tattoo-pic" alt="logo" />
          <p className="tattoo-word">
            {t("description.part1")}
            {/* <Trans i18nKey="description.part2">
            Edit <code>src/App.js</code> and save to reload.
          </Trans> */}
          </p>
        </div>
        <div className="language-switcher">
          <select
            value={i18n.resolvedLanguage}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            {Object.keys(lngs).map((lng) => (
              <option key={lng} value={lng}>
                {lngs[lng].nativeName}
              </option>
            ))}
          </select>
        </div>
      </header>
    </div>
  );
}

export default App;
