'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function createSite(formData: FormData) {
    const supabase = await createClient()

    const name = formData.get('siteName') as string
    const description = formData.get('siteDescription') as string

    if (!name) {
        return { error: 'Site name is required' }
    }

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const { error } = await supabase.from('sites').insert({
        name,
        description,
        user_id: user.id,
    })

    if (error) {
        console.error('Error creating site:', error)
        return { error: 'Failed to create site' }
    }

    revalidatePath('/')
    return { success: true }
}
