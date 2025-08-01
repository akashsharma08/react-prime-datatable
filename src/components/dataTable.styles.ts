import type { CSSProperties } from "react";

const headerStyle: CSSProperties = {
  textAlign: "center" as const,
  //   display: "flex",
  backgroundColor: "rgb(223, 220, 220)",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};

const cellStyle: CSSProperties = {
  textAlign: "left",
  wordWrap: "break-word",
  whiteSpace: "normal",
  maxWidth: "200px",
  padding: "8px",
};

const paginatorStyle: CSSProperties = {
  marginTop: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const tableStyle: CSSProperties = {
  width: "100rem",
};
const checkboxStyle: CSSProperties = {
  width: "3rem",

  textAlign: "center",
};
// CSS to hide extra tick icons
const hideExtraTicks = `
  .p-checkbox .p-checkbox-box .p-checkbox-icon {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box svg.p-checkbox-icon {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box .p-icon {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box svg {
    display: none !important;
  }
  .p-checkbox-box svg {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon svg {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box .p-icon svg {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon::before {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon::after {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box .p-icon::before {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box .p-icon::after {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box::before {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box::after {
    display: none !important;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon {
    visibility: hidden !important;
  }
  .p-checkbox .p-checkbox-box .p-icon {
    visibility: hidden !important;
  }
`;

export { paginatorStyle, cellStyle, tableStyle, hideExtraTicks };
export default headerStyle;
