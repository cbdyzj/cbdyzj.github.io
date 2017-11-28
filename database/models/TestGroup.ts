export function define(sequelize, DataTypes) {
    return sequelize.define('TestGroup', {
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
    }, {
            underscored: true,
            freezeTableName: true,
            tableName: 'test_groups',
        })
}

export function associate(models) {
    const { Test, TestGroup } = models
    TestGroup.hasMany(Test, {
        sourceKey: 'groupNo',
        foreignKey: 'groupNo',
        constraints: false,
    })
}