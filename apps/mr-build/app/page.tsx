import { Button } from '@mr-monorepo/ui';
import { createClient } from '@/utils/supabase/server';
import { createSite } from './actions';
import styles from "./page.module.css";

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: sites } = await supabase.from('sites').select('*').order('created_at', { ascending: false })

  return (
    <div className={styles.page} style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
      <main className={styles.main}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Mr Build Dashboard</h1>
          {user && <span style={{ color: '#666' }}>{user.email}</span>}
        </div>

        <p style={{ marginBottom: '2rem', color: '#666' }}>
          Welcome to your newly integrated site builder.
        </p>

        <div style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h3 style={{ marginTop: 0 }}>Create New Site</h3>
          <form action={createSite} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Site Name</label>
              <input name="siteName" required style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} placeholder="My Awesome Site" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 2 }}>
              <label style={{ fontSize: '0.9rem', fontWeight: 500 }}>Description</label>
              <input name="siteDescription" style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ddd' }} placeholder="A brief description..." />
            </div>
            <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Create Site</button>
          </form>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>Your Sites</h2>
          {sites && sites.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
              {sites.map((site: any) => (
                <div key={site.id} style={{ padding: '1rem', border: '1px solid #eaeaea', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0' }}>{site.name}</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>{site.description || 'No description'}</p>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: '#888', fontStyle: 'italic' }}>No sites created yet. Create your first one above!</p>
          )}
        </div>
      </main>
    </div>
  );
}
