import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminGuard from '../components/AdminGuard';

const Home = lazy(() => import('../components/pages/Home'));
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
