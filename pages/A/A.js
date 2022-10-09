// pages/A/A.js
// 导入log实时文件
const app = getApp()
const log = require("../../log")
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    // 点击A按钮
    HitA(){
        log.info("点击了A按钮")
    },
    // 点击B按钮
    HitB(){
        log.info("点击了B按钮")
    },
    // 点击C按钮
    HitC(){
        log.info("点击了C按钮")
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        log.info('打一些日志测试一下')
        log.setFilterMsg('filterkeyword')
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {
        log.info('在onHide打一些日志测试一下')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})