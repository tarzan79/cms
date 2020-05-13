const express = require("express");
let router = express.Router();

// router.get('/admin', (req, res) => {
//     res.render('admin/admin', {
//         layout: 'admin'
//     });
// });
// router.get('/admin/nodes', (req, res) => {
//     res.render('admin/nodes', {
//         layout: 'admin'
//     });
// });

router.get('/', (req, res) => {
  res.send('admin/admin');
});
router.get('/nodes', (req, res) => {
  res.send('admin/nodes');
});

module.exports = router;
