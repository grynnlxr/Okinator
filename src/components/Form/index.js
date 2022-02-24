function Header() {
  return (
    <section>
      <h2>Donne-moi ton chiffre préféré, je te dirai qui tu es</h2>
      <form>
        <label htmlFor="numberInput">Ton chiffre préféré</label>
        <input id="numberInput" type="text" />
      </form>
      <p>Je ne vois rien</p>
    </section>
  );
}
export default Header;
