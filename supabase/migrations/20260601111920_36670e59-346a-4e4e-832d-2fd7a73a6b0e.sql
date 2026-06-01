-- Restrict writes on the public-assets bucket; keep public reads.
-- Reads
DROP POLICY IF EXISTS "Public read access for public-assets" ON storage.objects;
CREATE POLICY "Public read access for public-assets"
ON storage.objects
FOR SELECT
USING (bucket_id = 'public-assets');

-- Writes: deny anon + authenticated. service_role bypasses RLS automatically,
-- so admin/server uploads still work; no INSERT/UPDATE/DELETE policy is needed
-- for regular users, which means those operations are blocked by default.
DROP POLICY IF EXISTS "Block public uploads to public-assets" ON storage.objects;
DROP POLICY IF EXISTS "Block public updates to public-assets" ON storage.objects;
DROP POLICY IF EXISTS "Block public deletes from public-assets" ON storage.objects;