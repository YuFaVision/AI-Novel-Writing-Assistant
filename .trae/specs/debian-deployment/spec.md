# AI小说创作工作台 - Debian部署产品需求文档

## Overview
- **Summary**: 本项目旨在将AI小说创作工作台部署到Debian系统上，使其能够在服务器环境中稳定运行，支持远程访问和持久化服务。
- **Purpose**: 解决项目在生产环境中的部署问题，确保系统能够在Debian服务器上稳定运行，便于团队协作和持续使用。
- **Target Users**: 开发人员、系统管理员、内容创作者。

## Goals
- 成功将AI小说创作工作台部署到Debian系统
- 确保服务能够自动启动和持久运行
- 配置适当的网络访问权限
- 提供清晰的部署和维护指南
- 验证部署后的系统功能完整性

## Non-Goals (Out of Scope)
- 性能优化和负载均衡配置
- 多服务器集群部署
- 容器化部署（如Docker）
- 域名和SSL证书配置

## Background & Context
- 项目采用Monorepo结构，包含前端(client)和后端(server)两部分
- 前端使用React 19 + Vite构建，后端使用Express 5 + Prisma
- 项目依赖Node.js 20.19.0或更高版本
- 默认使用SQLite数据库，可选使用Qdrant进行RAG功能

## Functional Requirements
- **FR-1**: 系统环境准备，包括安装Node.js、pnpm、git等必要依赖
- **FR-2**: 项目代码获取与依赖安装
- **FR-3**: 环境变量配置，包括数据库连接、API密钥等
- **FR-4**: 项目构建与编译
- **FR-5**: 服务启动与进程管理
- **FR-6**: 网络访问配置，确保前端和后端服务可访问

## Non-Functional Requirements
- **NFR-1**: 系统稳定性，确保服务能够持续运行
- **NFR-2**: 安全性，确保敏感配置信息的安全
- **NFR-3**: 可维护性，提供清晰的部署和维护指南
- **NFR-4**: 可扩展性，便于后续更新和升级

## Constraints
- **Technical**: Debian 10或更高版本，Node.js 20.19.0或更高版本
- **Business**: 最小化服务器资源占用
- **Dependencies**: 依赖外部LLM API服务（如OpenAI、DeepSeek等）

## Assumptions
- 服务器已安装Debian 10或更高版本
- 服务器具有互联网访问权限
- 服务器有足够的存储空间和内存
- 用户具有服务器的sudo权限

## Acceptance Criteria

### AC-1: 系统依赖安装
- **Given**: 服务器已安装Debian系统
- **When**: 执行依赖安装命令
- **Then**: 成功安装Node.js、pnpm、git等必要依赖
- **Verification**: `programmatic`
- **Notes**: Node.js版本需为20.19.0或更高

### AC-2: 项目代码获取与依赖安装
- **Given**: 系统依赖已安装
- **When**: 克隆项目代码并安装依赖
- **Then**: 项目代码成功克隆，依赖安装完成
- **Verification**: `programmatic`

### AC-3: 环境变量配置
- **Given**: 项目代码已获取
- **When**: 配置环境变量文件
- **Then**: 环境变量配置正确，包括数据库连接、API密钥等
- **Verification**: `human-judgment`

### AC-4: 项目构建
- **Given**: 环境变量已配置
- **When**: 执行构建命令
- **Then**: 项目构建成功，生成可执行文件
- **Verification**: `programmatic`

### AC-5: 服务启动与进程管理
- **Given**: 项目构建成功
- **When**: 启动服务并配置进程管理
- **Then**: 服务成功启动，进程管理配置正确
- **Verification**: `programmatic`

### AC-6: 系统功能验证
- **Given**: 服务已启动
- **When**: 访问前端和后端API
- **Then**: 前端页面可访问，后端API响应正常
- **Verification**: `human-judgment`

## Open Questions
- [ ] 是否需要配置防火墙规则？
- [ ] 是否需要配置HTTPS？
- [ ] 是否需要定期备份数据库？