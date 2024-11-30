import htmlLogo from "../img/drop-logos/html-logo.svg";
import cssLogo from "../img/drop-logos/css-logo.svg";
import jsLogo from "../img/drop-logos/js-logo.svg";
import csharpLogo from "../img/drop-logos/csharp-logo.svg";
import phpLogo from "../img/drop-logos/php-logo.svg";

import azureLogo from "../img/drop-logos/azure-logo.svg";
import vsCodeLogo from "../img/drop-logos/vs-code-logo.svg";
import nodeJsLogo from "../img/drop-logos/nodejs-logo.svg";
import visualStudioLogo from "../img/drop-logos/visual-studio-logo.svg";
import figmaLogo from "../img/drop-logos/figma-logo.svg";

import aspLogo from "../img/drop-logos/asp-dotnet-logo.svg";
import reactLogo from "../img/drop-logos/react-logo.svg";

const KnowledgeSection = () => {
  const dropBoxClickHandler = (e: React.MouseEvent) => {
    const dropbox = e.currentTarget.querySelector<HTMLElement>(".dropbox")!;
    dropbox.classList.toggle("open");

    if (dropbox.classList.contains("open")) {
      dropbox.style.maxHeight = `calc(${dropbox.scrollHeight}px + 1rem)`;
    } else {
      dropbox.style.maxHeight = `0px`;
    }
    //add margin to bottom of section based on which boxes are open
    if (window.innerWidth <= 1075) {
      const knowledgeSection = document.querySelector<HTMLElement>(".knowledge-section")!;
      const openBoxes = document.querySelectorAll<HTMLElement>(".open");

      if (openBoxes.length > 0) {
        const getAddedHeights: Array<number> = [];
        openBoxes.forEach((el) => {
          getAddedHeights.push(el.scrollHeight);
        });

        const totalHeight = getAddedHeights.reduce((acc, curr) => (acc += curr));
        knowledgeSection.style.paddingBottom = totalHeight + "px";
      } else {
        knowledgeSection.style.paddingBottom = `0px`;
      }
    }
  };

  return (
    <section className="knowledge-section position-relative">
      <h2 className="section-header text-center">My knowledge in the web industry</h2>

      <div className="d-flex flex-parent justify-content-between gap-5 w-75 mx-auto position-relative pt-5">
        <div
          className="d-flex flex-column flex-item"
          onClick={dropBoxClickHandler}>
          <button className="flex-button">
            <h5 className="drop-text">Languages I know</h5>
            <svg
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.4455 16.0585C13.2495 17.7416 10.7505 17.7416 9.55453 16.0585L1.51014 4.73772C0.0986824 2.75138 1.51887 0 3.95562 0L20.0444 0C22.4811 0 23.9013 2.75138 22.4899 4.73772L14.4455 16.0585Z"
                fill="#9D9D9D"
              />
            </svg>
          </button>
          <div className="dropbox">
            <ul className="w-100 list-unstyled">
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">HTML 5</p>
                <img
                  className="d-block"
                  src={htmlLogo}
                  alt="html logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">CSS</p>
                <img
                  className="d-block"
                  src={cssLogo}
                  alt="css logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">JavaScript</p>
                <img
                  className="d-block"
                  src={jsLogo}
                  alt="javaScript logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">C#</p>
                <img
                  className="d-block"
                  src={csharpLogo}
                  alt="csharp logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">PHP</p>
                <img
                  className="d-block"
                  src={phpLogo}
                  alt="php logo"
                />
              </li>
            </ul>
          </div>
        </div>

        <div
          className="d-flex flex-column flex-item"
          onClick={dropBoxClickHandler}>
          <button className="flex-button">
            <h5 className="drop-text">Applications I Use</h5>
            <svg
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.4455 16.0585C13.2495 17.7416 10.7505 17.7416 9.55453 16.0585L1.51014 4.73772C0.0986824 2.75138 1.51887 0 3.95562 0L20.0444 0C22.4811 0 23.9013 2.75138 22.4899 4.73772L14.4455 16.0585Z"
                fill="#9D9D9D"
              />
            </svg>
          </button>
          <div className="dropbox">
            <ul className="w-100 list-unstyled">
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">Azure Services</p>
                <img
                  className="d-block"
                  src={azureLogo}
                  alt="VS Code logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">VS Code</p>
                <img
                  className="d-block"
                  src={vsCodeLogo}
                  alt="VS Code logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">NodeJS</p>
                <img
                  className="d-block"
                  src={nodeJsLogo}
                  alt="NodeJS logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">Visual Studio</p>
                <img
                  className="d-block"
                  src={visualStudioLogo}
                  alt="Visual Studio"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">Figma</p>
                <img
                  className="d-block"
                  src={figmaLogo}
                  alt="Figma logo"
                />
              </li>
            </ul>
          </div>
        </div>

        <div
          className="d-flex flex-column flex-item"
          onClick={dropBoxClickHandler}>
          <button className="flex-button">
            <h5 className="drop-text">Things I am Learning</h5>
            <svg
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.4455 16.0585C13.2495 17.7416 10.7505 17.7416 9.55453 16.0585L1.51014 4.73772C0.0986824 2.75138 1.51887 0 3.95562 0L20.0444 0C22.4811 0 23.9013 2.75138 22.4899 4.73772L14.4455 16.0585Z"
                fill="#9D9D9D"
              />
            </svg>
          </button>
          <div className="dropbox">
            <ul className="w-100 list-unstyled">
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">Advanced Animations</p>
                <img
                  className="d-block"
                  src={cssLogo}
                  alt="css logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">ASP.NET Applications</p>
                <img
                  className="d-block"
                  src={aspLogo}
                  alt="css logo"
                />
              </li>
              <li className="d-flex justify-content-between align-content-center px-2">
                <p className="m-0 p-0 drop-text">Adv. React Techniques</p>
                <img
                  className="d-block"
                  src={reactLogo}
                  alt="css logo"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default KnowledgeSection;
