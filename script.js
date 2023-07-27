const sql = require('mssql');

// Step 1: Connect to the database and retrieve data
const config = {
  user: 'sa',
  password: 's8_@dm1n',
  server: 'GHPRODSRV04',
  database: 'SIZ_PV_EC135',
};

async function fetchData() {
  try {
    // Create a connection pool
    const pool = await sql.connect(config);

    console.log('Connected to the database');

    // Replace 'your_table' with the name of the table you want to convert
    const query = 'SELECT * FROM [SIZ_PV_EC135].[sde].[vw_Export_Business_Commercial];';

    // Execute the query
    const result = await pool.request().query(query);

    // Process the result (result.recordset contains the retrieved data)
    console.log('Data retrieved:', result.recordset);

    // Close the connection pool when done
    await pool.close();
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the fetchData function to start the process
fetchData();
