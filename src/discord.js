import "./discord.css";

import CartaoDiscord from "./CartaoDiscord";

export default function Discord() {
  let listaCartoes = [
    {
      titulo: "Anúncios",
      descricao:
        "Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que não está certo.",
      imagem:
        "https://theme.zdassets.com/theme_assets/678183/1bd76d1fd516f8dacd3c7422a8ceb929ef2502d9.svg",
    },
    {
      titulo: "Interface do Discord",
      descricao: "PRA QUE SERVE ESSE BOTÃO!?!!",
      imagem:
        "https://theme.zdassets.com/theme_assets/678183/8c6c6469bdca01e05d2870e6d373c1d80e290255.svg",
    },
    {
      titulo: "Anúncios",
      descricao:
        "Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que não está certo.",
      imagem:
        "https://theme.zdassets.com/theme_assets/678183/1bd76d1fd516f8dacd3c7422a8ceb929ef2502d9.svg",
    },
    {
      titulo: "Interface do Discord",
      descricao: "PRA QUE SERVE ESSE BOTÃO!?!!",
      imagem:
        "https://theme.zdassets.com/theme_assets/678183/8c6c6469bdca01e05d2870e6d373c1d80e290255.svg",
    },
    {
      titulo: "Anúncios",
      descricao:
        "Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que não está certo.",
      imagem:
        "https://theme.zdassets.com/theme_assets/678183/1bd76d1fd516f8dacd3c7422a8ceb929ef2502d9.svg",
    },
    {
      titulo: "Interface do Discord",
      descricao: "PRA QUE SERVE ESSE BOTÃO!?!!",
      imagem:
        "https://theme.zdassets.com/theme_assets/678183/8c6c6469bdca01e05d2870e6d373c1d80e290255.svg",
    },
    {
      titulo: "Anúncios",
      descricao:
        "Estamos de olho no que está acontecendo. Aqui está o que nós sabemos que não está certo.",
      imagem:
        "https://theme.zdassets.com/theme_assets/678183/1bd76d1fd516f8dacd3c7422a8ceb929ef2502d9.svg",
    },
    {
      titulo: "Interface do Discord",
      descricao: "PRA QUE SERVE ESSE BOTÃO!?!!",
      imagem:
        "https://theme.zdassets.com/theme_assets/678183/8c6c6469bdca01e05d2870e6d373c1d80e290255.svg",
    },
  ];
  return (
    <div className="discord">
      <h1>Discord</h1>

      <div className="itens">
        {listaCartoes.map((item) => (
          <CartaoDiscord
            titulo={item.titulo}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>
    </div>
  );
}
