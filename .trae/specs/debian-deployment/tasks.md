# AI小说创作工作台 - Debian部署实施计划

## [ ] Task 1: 更新Debian系统并安装必要依赖
- **Priority**: P0
- **Depends On**: None
- **Description**:
  - 更新Debian系统
  - 安装curl、git、build-essential等基础依赖
  - 安装Node.js 20.19.0或更高版本
  - 安装pnpm包管理器
- **Acceptance Criteria Addressed**: AC-1
- **Test Requirements**:
  - `programmatic` TR-1.1: Node.js版本检查（>=20.19.0）
  - `programmatic` TR-1.2: pnpm版本检查（>=9.7）
  - `programmatic` TR-1.3: git版本检查（>=2.0）
- **Notes**: 使用NodeSource源安装Node.js以确保版本正确性

## [ ] Task 2: 克隆项目代码到Debian服务器
- **Priority**: P0
- **Depends On**: Task 1
- **Description**:
  - 克隆项目代码到服务器
  - 进入项目目录
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `programmatic` TR-2.1: 项目目录存在且包含必要文件
  - `programmatic` TR-2.2: 项目结构完整（包含client、server等目录）
- **Notes**: 使用git clone命令获取项目代码

## [ ] Task 3: 安装项目依赖
- **Priority**: P0
- **Depends On**: Task 2
- **Description**:
  - 运行pnpm install安装项目依赖
- **Acceptance Criteria Addressed**: AC-2
- **Test Requirements**:
  - `programmatic` TR-3.1: 依赖安装完成且无错误
  - `programmatic` TR-3.2: node_modules目录存在
- **Notes**: 可能需要较长时间，确保网络连接稳定

## [ ] Task 4: 配置服务端环境变量
- **Priority**: P0
- **Depends On**: Task 3
- **Description**:
  - 复制server/.env.example为server/.env
  - 配置数据库连接、API密钥等环境变量
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `human-judgment` TR-4.1: 环境变量文件存在且配置正确
  - `human-judgment` TR-4.2: 数据库连接配置正确
- **Notes**: 默认使用SQLite数据库，RAG功能默认禁用

## [ ] Task 5: 配置前端环境变量
- **Priority**: P0
- **Depends On**: Task 3
- **Description**:
  - 复制client/.env.example为client/.env
  - 配置API基础URL
- **Acceptance Criteria Addressed**: AC-3
- **Test Requirements**:
  - `human-judgment` TR-5.1: 前端环境变量文件存在且配置正确
  - `human-judgment` TR-5.2: API基础URL配置正确
- **Notes**: API基础URL应指向服务器IP地址

## [ ] Task 6: 构建项目
- **Priority**: P0
- **Depends On**: Task 4, Task 5
- **Description**:
  - 运行pnpm build构建项目
- **Acceptance Criteria Addressed**: AC-4
- **Test Requirements**:
  - `programmatic` TR-6.1: 构建过程完成且无错误
  - `programmatic` TR-6.2: 前端构建输出目录存在
  - `programmatic` TR-6.3: 后端构建输出目录存在
- **Notes**: 构建过程可能需要较长时间

## [ ] Task 7: 安装PM2进程管理器
- **Priority**: P0
- **Depends On**: Task 6
- **Description**:
  - 全局安装PM2进程管理器
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `programmatic` TR-7.1: PM2安装成功
  - `programmatic` TR-7.2: PM2命令可用
- **Notes**: PM2用于管理服务进程，确保服务持续运行

## [ ] Task 8: 启动后端服务
- **Priority**: P0
- **Depends On**: Task 7
- **Description**:
  - 使用PM2启动后端服务
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `programmatic` TR-8.1: 后端服务启动成功
  - `programmatic` TR-8.2: 后端服务运行状态正常
- **Notes**: 后端服务默认监听3000端口

## [ ] Task 9: 启动前端服务
- **Priority**: P0
- **Depends On**: Task 8
- **Description**:
  - 使用PM2启动前端服务
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `programmatic` TR-9.1: 前端服务启动成功
  - `programmatic` TR-9.2: 前端服务运行状态正常
- **Notes**: 前端服务默认监听5173端口

## [ ] Task 10: 配置PM2开机自启
- **Priority**: P1
- **Depends On**: Task 8, Task 9
- **Description**:
  - 保存PM2进程列表
  - 配置PM2开机自启
- **Acceptance Criteria Addressed**: AC-5
- **Test Requirements**:
  - `programmatic` TR-10.1: PM2进程列表保存成功
  - `programmatic` TR-10.2: PM2开机自启配置成功
- **Notes**: 确保服务器重启后服务能够自动启动

## [ ] Task 11: 配置防火墙规则
- **Priority**: P1
- **Depends On**: Task 10
- **Description**:
  - 开放3000和5173端口
- **Acceptance Criteria Addressed**: AC-6
- **Test Requirements**:
  - `programmatic` TR-11.1: 3000端口开放
  - `programmatic` TR-11.2: 5173端口开放
- **Notes**: 如果服务器启用了防火墙，需要配置规则

## [ ] Task 12: 验证部署成功
- **Priority**: P0
- **Depends On**: Task 11
- **Description**:
  - 访问前端页面
  - 访问后端API健康检查端点
  - 验证系统功能
- **Acceptance Criteria Addressed**: AC-6
- **Test Requirements**:
  - `human-judgment` TR-12.1: 前端页面可访问
  - `programmatic` TR-12.2: 后端API健康检查响应正常
  - `human-judgment` TR-12.3: 系统功能正常
- **Notes**: 验证系统是否能够正常运行