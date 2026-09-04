import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminGuard from '../components/AdminGuard';

const Home = lazy(() => import('../components/pages/Home'));
const About = lazy(() => import('../components/pages/About'));
const Services = lazy(() => import('../components/pages/Services'));
const Contact = lazy(() => import('../components/pages/Contact'));
const Products = lazy(() => import('../components/pages/Products'));
const CAAQMS = lazy(() => import('../components/pages/CAAQMS'));
const CEMS = lazy(() => import('../components/pages/CEMS'));
const EQMS = lazy(() => import('../components/pages/EQMS'));
const Portable = lazy(() => import('../components/pages/Portable'));
const Water = lazy(() => import('../components/pages/Water'));
const Analytical = lazy(() => import('../components/pages/Analytical'));
const GasChromatography = lazy(() =>
  import('../components/pages/GasChromatography')
);
const GeneralPurposeGC = lazy(() =>
  import('../components/pages/GeneralPurposeGC')
);
const ProcessGC = lazy(() => import('../components/pages/ProcessGC'));
const LabGC = lazy(() => import('../components/pages/LabGC'));
const MedicalGC = lazy(() => import('../components/pages/MedicalGC'));
const EnvironmentalGC = lazy(() =>
  import('../components/pages/EnvironmentalGC')
);
const AttachmentGC = lazy(() => import('../components/pages/AttachmentGC'));
const AirQualityMonitoring = lazy(() =>
  import('../components/pages/AirQualityMonitoring')
);
const AmbientAirQualityMonitoring = lazy(() =>
  import('../components/pages/AmbientAirQualityMonitoring')
);
const ContinuousEmissionMonitoring = lazy(() =>
  import('../components/pages/ContinuousEmissionMonitoring')
);
const WaterQualityMonitoring = lazy(() =>
  import('../components/pages/WaterQualityMonitoring')
);
const GasDetection = lazy(() => import('../components/pages/GasDetection'));
const DataUploading = lazy(() => import('../components/pages/DataUploading'));
const Admin = lazy(() => import('../components/pages/admin.jsx'));
const AdminLogin = lazy(() => import('../components/pages/AdminLogin'));

function RouteFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center text-gray-500 text-sm font-medium">
      Loading…
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/caaqms" element={<CAAQMS />} />
        <Route path="/products/cems" element={<CEMS />} />
        <Route path="/products/eqms" element={<EQMS />} />
        <Route path="/products/portable" element={<Portable />} />
        <Route path="/products/water" element={<Water />} />
        <Route path="/products/analytical" element={<Analytical />} />
        <Route
          path="/products/gas-chromatography"
          element={<GasChromatography />}
        />
        <Route path="/products/air" element={<AirQualityMonitoring />} />
        <Route
          path="/products/analytical/general-purpose"
          element={<GeneralPurposeGC />}
        />
        <Route
          path="/products/analytical/process"
          element={<ProcessGC />}
        />
        <Route path="/products/analytical/lab" element={<LabGC />} />
        <Route
          path="/products/analytical/medical"
          element={<MedicalGC />}
        />
        <Route
          path="/products/analytical/environmental"
          element={<EnvironmentalGC />}
        />
        <Route
          path="/products/analytical/attachment"
          element={<AttachmentGC />}
        />
        {/* Legacy reference route aliases */}
        <Route path="/caaqms" element={<CAAQMS />} />
        <Route path="/cems" element={<CEMS />} />
        <Route path="/eqms" element={<EQMS />} />
        <Route path="/air" element={<AirQualityMonitoring />} />
        <Route path="/water" element={<Water />} />
        <Route path="/purpose" element={<GeneralPurposeGC />} />
        <Route path="/process" element={<ProcessGC />} />
        <Route path="/lab" element={<LabGC />} />
        <Route path="/medical" element={<MedicalGC />} />
        <Route path="/environ" element={<EnvironmentalGC />} />
        <Route path="/attach" element={<AttachmentGC />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminGuard>
              <Admin />
            </AdminGuard>
          }
        />
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
        <Route
          path="/admin"
          element={
            <AdminGuard>
              <Admin />
            </AdminGuard>
          }
        />
      </Routes>
    </Suspense>
  );
}
