export default function ResetCSS() {
  return (
    <style global jsx>{`
      /** Espaçamento padrão */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      /** Altura mínima de 100% */
      html,
      body {
        height: 100%;
      }

      /** Styles de Links */
      a {
        text-decoration: none;
        color: inherit;
      }

      /** Styles de Listas */
      ul,
      ol {
        list-style: none;
      }

      /** Formatação padrão de campos de formulários */
      input,
      button,
      textarea,
      select {
        font: inherit;
        border: none;
        background: none;
        outline: none;
      }

      /** Largura total de elementos que ocupam a linha inteira */
      img,
      video {
        max-width: 100%;
        height: auto;
      }

      /** Bordas */
      table {
        border-collapse: collapse;
      }

      /** Negrito */
      strong {
        font-weight: normal;
      }
    `}</style>
  )
}
