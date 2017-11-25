export function define(sequelize, DataTypes) {
    const Test = sequelize.define('Test', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        groupId: {
            field: 'group_id',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
        foreignKey: 'groupId',
        constraints: false,
    })
}