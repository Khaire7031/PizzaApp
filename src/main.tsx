import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DeviceProvider } from './hooks/DeviceContext.tsx'
import { Provider } from 'react-redux'
import store from './components/redux/store.ts'

createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <DeviceProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DeviceProvider>
  </StrictMode>,
)
