# Maré — Lava Rápido & Estética Automotiva

Site estático (HTML + CSS + JS puro, sem build, sem framework). Pronto pra publicar no Vercel, Netlify, Hostinger ou qualquer hospedagem de arquivos estáticos.

## Estrutura

```
index.html     → esqueleto da página (não precisa editar para trocar de cliente)
styles.css     → todo o visual (cores, tipografia, layout)
script.js      → lê config.js e preenche a página (não precisa editar)
config.js      → TODO o conteúdo do negócio (nome, preços, endereço, textos)
images/        → fotos reais (logo, hero, galeria) — opcional
```

## Para reaproveitar em outro lava-rápido / estética automotiva

Edite **apenas o `config.js`**:

- `brand` — nome da empresa
- `contact` — WhatsApp, telefone, endereço, horário
- `hero` — título e texto de abertura
- `stats` — números de confiança (anos de mercado, lavagens feitas, nota, tempo médio)
- `services` — lista de serviços avulsos e preços
- `plans` — planos de assinatura mensal
- `steps` — passo a passo de como funciona
- `testimonials` — depoimentos de clientes
- `images` — caminhos para fotos reais, quando o cliente enviar (ex.: `"images/hero.jpg"`)
- `seo` — título e descrição que aparecem no Google e ao compartilhar o link

Nenhuma outra alteração é necessária — o `script.js` monta a página inteira a partir desse arquivo.

## Adicionando fotos

1. Coloque os arquivos dentro da pasta `images/`.
2. No `config.js`, preencha `images.heroPhoto` com o caminho (ex.: `"images/hero.jpg"`) para substituir o desenho vetorial do topo.
3. Para uma galeria de antes/depois, use `images.gallery` (ainda não renderizada — avise se quiser essa seção adicionada).

## Páginas secundárias (futuro)

Para adicionar uma página como "Sobre" ou "Galeria": crie um novo arquivo `.html` na raiz, reaproveitando o mesmo `<link rel="stylesheet" href="styles.css">` e os mesmos scripts (`config.js` + `script.js`, ou um script próprio da página). O cabeçalho e rodapé podem ser copiados de `index.html`.

## Publicar

- **Vercel**: importe esta pasta como projeto (sem framework / "Other") — não precisa de build command nem install command.
- **Qualquer outra hospedagem**: suba os arquivos tal como estão; `index.html` é o ponto de entrada.
