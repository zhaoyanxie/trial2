const database = require("../database");
const { TABLE_TEACHERS } = require("../constants");
const { getIdByEmail, getEmailById } = require("../utils");

exports.init = async pool => {
  try {
    await database.dropTable(pool, TABLE_TEACHERS);
    await database.initTable(pool, TABLE_TEACHERS);
  } catch (e) {
    throw e;
  }
};

exports.insert = async (pool, teacherEmail) =>
  await database.insert(pool, TABLE_TEACHERS, teacherEmail);

exports.getAll = async pool => {
  const queryStr = `SELECT * from ${TABLE_TEACHERS}`;
  return await database.query(pool, queryStr);
};

exports.getIdByEmail = async getTeacher => {
  const id = await getIdByEmail(TABLE_TEACHERS, getTeacher);
  if (!id) return -1;
  return id;
};

exports.getEmailById = async getTeacher => {
  const email = await getEmailById(TABLE_TEACHERS, getTeacher);
  if (!email) return -1;
  return email;
};