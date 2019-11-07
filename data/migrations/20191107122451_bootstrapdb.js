exports.up = function(knex) {
	return knex.schema
		.createTable('Species', (tbl) => {
			tbl.increments();

			tbl.string('name', 255).notNullable();
		})
		.createTable('Animals', (tbl) => {
			tbl.increments();

			tbl.string('name', 255).notNullable();

			//define our foreign key
			tbl
				.integer('Species_Id')
				.unsigned()
				.references('id')
				.inTable('Species')
				.onDelete('RESTRICT') //other values coulde be 'RESTRICT', 'NO ACTION', 'SET NULL',
				.onUpdate('CASCADE');
		})
		.createTable('Zoos', (tbl) => {
			tbl.increments();
			tbl.string('name', 255).notNullable();
			tbl.string('address', 255);
		})
		.createTable('Zoo_Animals', (tbl) => {
			tbl.increments();
			tbl.string('from', 255).notNullable();
			tbl.string('to', 255);
			tbl.integer('Zoo_id').unsigned().references('id').inTable('Zoos').onDelete('RESTRICT').onUpdate('CASCADE');
			tbl
				.integer('Animal_id')
				.unsigned()
				.references('id')
				.inTable('Animals')
				.onDelete('RESTRICT')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {};
