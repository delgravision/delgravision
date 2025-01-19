# Clonează repository-ul
git clone https://github.com/delgravision/delgravision.git
cd delgravision

# Creează un branch nou pentru modificări
git checkout -b preview

# Creează fișierul stackbit.config.ts și adaugă conținutul
echo 'export default { stackbitVersion: "0.3.0", ssgName: "nextjs", nodeVersion: "16", features: { previewMode: true } };' > stackbit.config.ts

# Adaugă fișierul la Git și fă commit
git add stackbit.config.ts
git commit -m "Added stackbit.config.ts for Stackbit integration"

# Trimite modificările pe branch-ul preview
git push origin preview

# Creează Pull Request pe GitHub (manual, sau folosind GitHub CLI)
gh pr create --base main --head preview --title "Add stackbit.config.ts" --body "Integrating Stackbit configuration"
