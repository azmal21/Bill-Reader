const pool = require('./db');
async function test() {
  try {
    const result = await pool.query('SELECT id, invoice_number, item_count FROM metro_invoices ORDER BY id DESC LIMIT 5');
    console.log("metro_invoices:");
    console.log(result.rows);
    const result2 = await pool.query('SELECT id, invoice_number, item_count FROM invoices ORDER BY id DESC LIMIT 5');
    console.log("invoices:");
    console.log(result2.rows);
  } catch (err) {
    console.error(err);
  } finally {
    process.exit();
  }
}
test();
