import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CAAQMS from './pages/CAAQMS';
import CEMS from './pages/CEMS';
import EQMS from './pages/EQMS';
import Portable from './pages/Portable';
import Water from './pages/Water';
import Analytical from './pages/Analytical';
import GasChromatography from './pages/GasChromatography';
import AmbientAirQualityMonitoring from './pages/AmbientAirQualityMonitoring';
import ContinuousEmissionMonitoring from './pages/ContinuousEmissionMonitoring';
import WaterQualityMonitoring from './pages/WaterQualityMonitoring';
import GasDetection from './pages/GasDetection';
import DataUploading from './pages/DataUploading';

function App() {
  return (
    <Router>
      <MainLayout>
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
          <Route path="/services/ambient-air-quality-monitoring" element={<AmbientAirQualityMonitoring />} />
          <Route path="/services/continuous-emission-monitoring" element={<ContinuousEmissionMonitoring />} />
          <Route path="/services/water-quality-monitoring" element={<WaterQualityMonitoring />} />
          <Route path="/services/gas-detection" element={<GasDetection />} />
          <Route path="/services/data-uploading" element={<DataUploading />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
