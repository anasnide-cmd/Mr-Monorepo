import { Button } from '@mr-monorepo/ui';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page} style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <main className={styles.main}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Mr Build Dashboard</h1>
        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Welcome to your new site builder. using shared UI components.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
            <Button onClick={() => alert('New Site Created!')}>
            Create New Site
            </Button>
            <Button onClick={() => console.log('Import Clicked')}>
                Import Site
            </Button>
        </div>

        <div style={{ marginTop: '4rem', padding: '1rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
            <h2>Your Sites</h2>
            <p>No sites created yet.</p>
        </div>
      </main>
    </div>
  );
}
