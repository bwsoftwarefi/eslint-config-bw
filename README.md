# eslint-config-bw

## Usage

1. `npm install --save-dev eslint-config-bw eslint`

1. Create .eslintrc file in the root directory

1. And paste this code

```json
{
  "extends": "eslint-config-bw"
}
```

Define environments if needed

```json
{
  "extends": "eslint-config-bw",
  "rules": {},
  "env": {
    "browser": true,
    "node": true
  }
}
```

And maybe in your `package.json`:

```json
"scripts": {
  "lint": "eslint src/**.js"
}
```
