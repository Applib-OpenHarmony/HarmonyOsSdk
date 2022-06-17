# 使用说明

```bash
# -jar 	jar包路径，D:\temp\tools_oat\target\ohos_ossaudittool-1.0.jar 需要改成ohos_ossaudittool-1.0.jar的实际路径
# -s 	指定要检查的代码目录路径，D:\code\oat_test 改成要检查的项目路径
# -r	指定检查报告输出的文件路径
# -n	检查任务的名称，本地检查没有额外用途，可以任意填写。
# 更多帮助执行java -jar ohos_ossaudittool-1.0.jar -h

# 示例1
java -jar D:\temp\tools_oat\target\ohos_ossaudittool-1.0.jar -s .\ -r .\report.txt -n selfcheck

# 示例2
java -jar D:\temp\tools_oat\target\ohos_ossaudittool-1.0.jar -s D:\code\oat_test -r .\report.txt -n selfcheck


java -jar D:\temp\tools_oat\target\ohos_ossaudittool-1.0.jar -s \\192.168.153.128\javen\code\tpc\opus -r .\report.txt -n selfcheck

```


# oat 问题处理参考
https://gitee.com/openharmony-sig/tools_oat#oat%E9%97%AE%E9%A2%98%E7%A1%AE%E8%AE%A4
