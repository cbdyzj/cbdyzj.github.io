export function define(sequelize, DataTypes) {
    return sequelize.define('TestGroup', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
            underscored: true,
            freezeTableName: true,
            tableName: 'test_groups',
        })
}
