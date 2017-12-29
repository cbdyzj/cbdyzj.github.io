export function define(sequelize, DataTypes) {
    return sequelize.define('Foo', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
        },
    }, {
            tableName: 'foos',
        })
}

export function associate(models) {
    models.Foo.hasMany(models.Bar, {
        sourceKey: 'name',
        foreignKey: 'name',
        constraints: false,
    })
}