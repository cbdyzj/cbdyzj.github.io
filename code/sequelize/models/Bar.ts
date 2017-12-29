export function define(sequelize, DataTypes) {
    return sequelize.define('Bar', {
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
            tableName: 'bars',
        })
}

export function associate(models) {
    models.Bar.belongsTo(models.Foo, {
        foreignKey: 'name',
        targetKey: 'name',
        constraints: false,
    })
}