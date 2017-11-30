export function define(sequelize, DataTypes) {
    return sequelize.define('Test', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        groupNo: {
            field: 'group_no',
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
            underscored: true,
            freezeTableName: true,
            tableName: 'tests',
        })
}

export function associate(models) {
    const { Test, TestGroup } = models
    Test.belongsTo(TestGroup, {
        foreignKey: 'groupNo',
        targetKey: 'groupNo',
        constraints: false,
    })
}