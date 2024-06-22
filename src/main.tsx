import React from 'react'
import ReactDOM from 'react-dom/client'
import { LicenseInfo } from "@mui/x-data-grid-pro";
import { CssBaseline } from '@mui/material';
import { OuterApp } from './OuterApp.tsx';

const MUI_PRO_LICENSE_KEY = import.meta.env.VITE_MUI_PRO_LICENSE_KEY
if (typeof MUI_PRO_LICENSE_KEY === "undefined") {
  console.error(
    "MUI Pro license key not found. Watermarks will be shown when MUI Pro components are used."
  );
} else {
  LicenseInfo.setLicenseKey(MUI_PRO_LICENSE_KEY);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <OuterApp />
  </React.StrictMode>,
)
