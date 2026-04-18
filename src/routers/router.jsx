import { Routes, Route } from 'react-router-dom';
import Home from '../components/pages/Home';
import Services from '../components/pages/Services';
import Contact from '../components/pages/Contact';
import CAAQMS from '../components/pages/CAAQMS';
import CEMS from '../components/pages/CEMS';
import EQMS from '../components/pages/EQMS';
import Portable from '../components/pages/Portable';
import Water from '../components/pages/Water';
import Analytical from '../components/pages/Analytical';
import GasChromatography from '../components/pages/GasChromatography';
import AmbientAirQualityMonitoring from '../components/pages/AmbientAirQualityMonitoring';
import ContinuousEmissionMonitoring from '../components/pages/ContinuousEmissionMonitoring';
import WaterQualityMonitoring from '../components/pages/WaterQualityMonitoring';
import GasDetection from '../components/pages/GasDetection';
import DataUploading from '../components/pages/DataUploading';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/caaqms" element={<CAAQMS />} />
      <Route path="/products/cems" element={<CEMS />} />
      <Route path="/products/eqms" element={<EQMS />} />
      <Route path="/products/portable" element={<Portable />} />
      <Route path="/products/water" element={<Water />} />
      <Route path="/products/analytical" element={<Analytical />} />
      <Route path="/products/gas-chromatography" element={<GasChromatography />} />
      <Route
        path="/services/ambient-air-quality-monitoring"
        element={<AmbientAirQualityMonitoring />}
      />
      <Route
        path="/services/continuous-emission-monitoring"
        element={<ContinuousEmissionMonitoring />}
      />
      <Route
        path="/services/water-quality-monitoring"
        element={<WaterQualityMonitoring />}
      />
      <Route path="/services/gas-detection" element={<GasDetection />} />
      <Route path="/services/data-uploading" element={<DataUploading />} />
    </Routes>
  );
}
