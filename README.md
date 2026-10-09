# Prokrity Birthday Website ❤️

A romantic, interactive birthday website built with plain HTML, CSS, and JavaScript. No frameworks or installation needed.

## 1. Run it on your computer

1. Download and extract `prokrity_birthday_website.zip`.
2. Open the extracted folder.
3. Double-click `index.html`. It should open in your browser.
4. Click **Open My Heart** and test the chapters.

Internet is only needed for the optional Google Fonts. The website itself runs locally.

## 2. Edit your writing

1. Open `script.js` in Notepad, VS Code, or another text editor.
2. At the very top, find the section marked **EDIT YOUR BIRTHDAY WEBSITE TEXT HERE**.
3. Replace the text inside quotation marks. Keep the quotation marks, commas, and brackets.
4. Save the file, then refresh `index.html` in your browser.

The writing fields include:
- `name`
- `openingEyebrow`, `openingTitle`, `openingMessage`
- `chapters`: each chapter has `title`, `message`, `english`, and `note`
- `finalTitle`, `finalMessage`, `signature`
- button labels

You can add or remove chapters by editing the `chapters` list, but keep each chapter object separated by a comma. The progress bar automatically adjusts to the number of chapters.

**Important:** In `openingTitle` and `finalTitle`, the `<br>` and `<span>` tags are intentional; they create line breaks and highlight text. Leave those tags in place unless you know HTML.

## 3. Add music (optional)

Browsers do not reliably allow music to start automatically before the visitor interacts with the page. This site uses a play/pause button.

To add a song:
1. Use an audio file you own or have permission to use.
2. Name the MP3 file exactly `music.mp3`.
3. Put it in the same folder as `index.html`.
4. Test the music button.

Do not upload copyrighted music unless you have the rights or permission to share it.

## 4. Upload to GitHub

### Create a repository
1. Go to https://github.com and sign in or create an account.
2. Click the **+** icon in the top-right corner, then choose **New repository**.
3. Repository name: `prokrity-birthday`
4. Choose **Public** if you want to use GitHub Pages on a free personal account with the simplest setup.
5. Select **Add a README file** if you like; if GitHub warns that README already exists, you can upload these files into that repository.
6. Click **Create repository**.

### Upload the website files
1. On the repository page, click **Add file** → **Upload files**.
2. Open the extracted website folder on your computer.
3. Select and upload these files: `index.html`, `style.css`, `script.js`, and `README.md`. If you added `music.mp3`, you can upload it too, provided you have the rights to share it.
4. Drag them into GitHub's upload area.
5. Scroll down and click **Commit changes**.

Make sure `index.html` is at the repository's top level, not buried inside another folder.

## 5. Publish it with GitHub Pages

1. In your repository, open **Settings**.
2. In the left menu, find **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch `main` and folder `/(root)`, then click **Save**.
5. Wait a few minutes. Refresh the Pages settings screen; GitHub will show your website URL.

The URL usually looks like:
`https://YOUR-GITHUB-USERNAME.github.io/prokrity-birthday/`

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username. Do not share your username or repository URL here if you prefer to keep it private.

## 6. Update it later

Edit `script.js` locally, test the site, then go to GitHub and use **Add file → Upload files** to upload the changed file and commit the change. You can also edit a file directly on GitHub using its pencil/edit button.

## Troubleshooting
- **Website is blank or broken:** Check that all three files (`index.html`, `style.css`, `script.js`) are in the repository root and the filenames match exactly.
- **Changes aren't visible:** Save the file, refresh the local page, and after uploading wait a few minutes; try a hard refresh with `Ctrl + F5`.
- **Music doesn't play:** Check that `music.mp3` is in the same folder and named exactly that. The visitor must click the music button.
- **GitHub Pages not appearing:** Confirm the repository is public, the branch is `main`, and the Pages folder is `/(root)`. Wait a few minutes and reload the Pages settings.

## Privacy note
A public GitHub repository and its published website can be seen by anyone who has the link, and public repositories are discoverable. Do not put private information, passwords, phone numbers, or anything you would not want others to see in the files.
