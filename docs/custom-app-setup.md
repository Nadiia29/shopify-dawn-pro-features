# Creating a Custom App Access Token (for demo content)

Needed once, temporarily, so I can create the Bloom Home products/collections/metafields/images via the Admin API instead of you doing it by hand. Safe to revoke right after.

## Steps

1. Admin → **Settings → Apps and sales channels**.
2. Click **Develop apps** (top right). If you see "Enable custom app development" first, click that and confirm.
3. **Create an app** → name it something like `Bloom Home Content Loader`.
4. Open the **Configuration** tab → **Admin API integration** → click **Configure**.
5. Enable exactly these scopes (least privilege — nothing beyond what's needed):
   - `read_products`, `write_products`
   - `read_files`, `write_files`
   - `read_inventory`, `write_inventory`
   - `read_locations`
6. Save.
7. Go to the **API credentials** tab → **Install app** → confirm.
8. Under **Admin API access token**, click **Reveal token once** and copy it (starts with `shpat_...`). It's only shown once — if you navigate away before copying, you'll need to regenerate it.

## Sharing it with me

Paste the token in chat. I'll use it locally for this session only (never committed to git — `.gitignore` already excludes `.env`/`.env.*`/`*.token`).

## After we're done

Go back to **Settings → Apps and sales channels → Develop apps → Bloom Home Content Loader → API credentials** and click **Uninstall**, or regenerate the token, so it stops working. There's no reason to leave a write-access token active longer than needed.
