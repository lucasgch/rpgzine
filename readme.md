# RPGZine

Um zine online estático focado em RPG de mesa, inspirado na filosofia *Old School*. O site é gerado usando **JBake** com **Thymeleaf** e hospedado no **[GitHub Pages](https://lucasgch.github.io/rpgzine/)**.

---

## Tecnologias Utilizadas

* **[JBake](https://jbake.org/):** Gerador de sites estáticos baseado na JVM.
* **[Thymeleaf](https://www.thymeleaf.org/):** Motor de renderização de templates HTML5.
* **Markdown:** Formato para escrita das postagens e páginas.
* **GitHub Actions:** Pipeline de CI/CD para compilação e publicação automática.
* **Pageclip:** Formulário de contato integrado ao site.

---

## Estrutura do Projeto

```text
.
├── assets/          # Arquivos estáticos (CSS, JS, imagens, mapas, fichas)
├── content/         # Conteúdo em Markdown (.md)
│   ├── blog/        # Postagens do zine
│   └── about.md     # Página Sobre
├── templates/       # Layouts HTML/Thymeleaf (.thyme)
├── jbake.properties # Configurações globais do JBake
└── .github/         # Workflows do GitHub Actions para deploy
```

## Executando Localmente

### Pré-requisitos

* Java JDK 11+
* JBake (Recomendado instalar via SDKMAN!):

```Bash
sdk install jbake
```

### Passos para Rodar

1. Clone o repositório:

```Bash
git clone [https://github.com/seu-usuario/rpgzine.git](https://github.com/seu-usuario/rpgzine.git)
cd rpgzine
```

2. Compile e inicie o servidor local:

```Bash
jbake -b -s
```

3. Acesse no navegador:

Abra http://localhost:8820 para visualizar o site com suporte a live reload.

## Criando uma Nova Postagem

Adicione um arquivo .md no diretório content/blog/ seguindo a estrutura de cabeçalho abaixo:

```Markdown
title=Título da Postagem sobre RPG
date=2026-09-01
type=post
tags=rpg, osr, cairn, houserules
status=published
~~~~~~

Escreva seu texto em Markdown aqui...
```

* Defina status=draft caso não queira que o post seja  compilado ainda.

## Deploy Automático

O projeto utiliza GitHub Actions para realizar a compilação automática a cada push na branch main.

Certifique-se de que a opção Settings > Pages > Source no repositório do GitHub está configurada para GitHub Actions.

Faça commit e envie suas alterações:

```Bash
git add .
git commit -m "feat: novo post sobre osr"
git push origin main
```
