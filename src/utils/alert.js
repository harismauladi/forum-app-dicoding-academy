const showAlert = (() => {
  function alertMassage(massage) {
    // eslint-disable-next-line no-alert
    alert(massage);
  }
  return { alertMassage };
})();
export default showAlert;
