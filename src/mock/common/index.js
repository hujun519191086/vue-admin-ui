const menuInfo = {
    "errCode": 0,
    "errMsg": "",
    "pageSize": 1,
    "totalPage": 1,
    "pageNum": 1,
    "totalRows": 1,
    "data": [{
        "id": 1,
        "deptId": 0,
        "name": "系统管理",
        "parentId": 0,
        "order": 100,
        "status": 1,
        "url": "systemManage",
        "iconClass":"",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:12",
        "updater": "0",
        "updateTime": "2018-10-29 19:12"
    }, {
        "id": 2,
        "deptId": 0,
        "name": "系统设置",
        "parentId": 1,
        "order": 1,
        "status": 1,
        "url": "systemSetting",
        "iconClass":"el-icon-setting",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:16",
        "updater": "0",
        "updateTime": "2018-10-29 19:16"
    }, {
        "id": 3,
        "deptId": 0,
        "name": "部门维护",
        "parentId": 2,
        "order": 1,
        "status": 1,
        "url": "department",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:18",
        "updater": "0",
        "updateTime": "2018-10-29 19:18"
    }, {
        "id": 4,
        "deptId": 0,
        "name": "岗位维护",
        "parentId": 2,
        "order": 2,
        "status": 1,
        "url": "position",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:19",
        "updater": "0",
        "updateTime": "2018-10-29 19:19"
    }, {
        "id": 5,
        "deptId": 0,
        "name": "模块维护",
        "parentId": 2,
        "order": 3,
        "status": 1,
        "url": "module",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:19",
        "updater": "0",
        "updateTime": "2018-10-29 19:19"
    }, {
        "id": 6,
        "deptId": 0,
        "name": "角色维护",
        "parentId": 2,
        "order": 4,
        "status": 1,
        "url": "role",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:20",
        "updater": "0",
        "updateTime": "2018-10-29 19:20"
    }, {
        "id": 7,
        "deptId": 0,
        "name": "员工设置",
        "parentId": 1,
        "order": 99,
        "status": 1,
        "url": "employee",
        "iconClass":"el-icon-setting",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:21",
        "updater": "0",
        "updateTime": "2018-10-29 19:21"
    }, {
        "id": 8,
        "deptId": 0,
        "name": "员工录入",
        "parentId": 7,
        "order": 99,
        "status": 1,
        "url": "addUser",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:21",
        "updater": "0",
        "updateTime": "2018-10-29 19:21"
    }, {
        "id": 9,
        "deptId": 0,
        "name": "组件示例",
        "parentId": 0,
        "order": 99,
        "status": 1,
        "url": "components",
        "permissionTag": "",
        "creator": "0",
        "createTime": "2018-10-29 19:21",
        "updater": "0",
        "updateTime": "2018-10-29 19:21"
    },
        {
            "id": 10,
            "deptId": 0,
            "name": "table 组件",
            "parentId": 9,
            "order": 99,
            "status": 1,
            "url": "tableComps",
            "iconClass":"el-icon-document",
            "permissionTag": "",
            "creator": "0",
            "createTime": "2018-10-29 19:21",
            "updater": "0",
            "updateTime": "2018-10-29 19:21"
        }
        ,
        {
            "id": 11,
            "deptId": 0,
            "name": "基础 Table",
            "parentId": 10,
            "order": 99,
            "status": 1,
            "url": "tableBaseComp",
            "iconClass":"el-icon-document",
            "permissionTag": "",
            "creator": "0",
            "createTime": "2018-10-29 19:21",
            "updater": "0",
            "updateTime": "2018-10-29 19:21"
        }
    ]
}


export default {

    getMenuInfo() {

        return menuInfo;
    }
}