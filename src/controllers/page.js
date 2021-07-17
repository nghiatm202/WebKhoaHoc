class PageController {
  home(req, res) {
    res.status(200).render("home");
  }
}

module.exports = new PageController();
