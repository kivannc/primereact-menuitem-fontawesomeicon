import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../../index.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";

import { TabMenu } from "primereact/tabmenu";

const TabMenuDemo = () => {
  const items = [
    {
      label: "Ip Settings",
      template: (item, options) => (
        <button
          type="button"
          className={options.className}
          target={item.target}
          onClick={options.onClick}
        >
          <span className={options.iconClassName}>
            <FontAwesomeIcon icon={faNetworkWired} />
          </span>
          <span className={options.labelClassName}>{item.label}</span>
        </button>
      )
    },
    { label: "Home", icon: "pi pi-fw pi-home" },
    { label: "Calendar", icon: "pi pi-fw pi-calendar" },
    { label: "Edit", icon: "pi pi-fw pi-pencil" },
    { label: "Documentation", icon: "pi pi-fw pi-file" },
    { label: "Settings", icon: "pi pi-fw pi-cog" }
  ];

  return (
    <div>
      <div className="card">
        <h5>Default</h5>
        <TabMenu model={items} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<TabMenuDemo />, rootElement);
