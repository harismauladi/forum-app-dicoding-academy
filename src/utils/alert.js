const showAlert = (() => {
  function alertMassage(massage) {
    alert(massage);
  }
  return { alertMassage };
})();
export default showAlert;
