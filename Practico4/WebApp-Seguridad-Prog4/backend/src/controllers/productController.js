const { db } = require('../config/database');

// Funcion para detectar patrones de SQL Injection
function isInjection(value = '') {
  const patterns = [
    /'/g,
    /--/g,
    /;/g,
    /\/\*/g,
    /\*\//g,
    /#/g,
    /union/gi,
    /select/gi,
    /information_schema/gi,
    /=/g
  ];
  return patterns.some(p => p.test(value));
}

// VULNERABLE: SQL Injection
const getProducts = (req, res) => {
  const { category, search } = req.query;

  if ((category && isInjection(category)) || (search && isInjection(search))) {
    return res.status(200).json([]);
  }
  
  // VULNERABLE: Concatenación directa de strings en SQL
  let query = 'SELECT * FROM products WHERE 1=1';
  const params = [];
  
  if (category) {
    query += ` AND category = '${category}'`;
    params.push(category);
  }
  
  if (search) {
    query += ` AND name LIKE '%${search}%'`;
    params.push(`%${search}%`);
  }
  
  db.query(query, params, (err, results) => {
    if (err) {
      return res.status(200).json([]);
    }
    res.json(results);
  });
};

module.exports = {
  getProducts
};
