Input: 
Activity table:
+---------+------------+---------------+---------------+
| user_id | session_id | activity_date | activity_type |
+---------+------------+---------------+---------------+
| 1       | 1          | 2019-07-20    | open_session  |
| 1       | 1          | 2019-07-20    | scroll_down   |
| 1       | 1          | 2019-07-20    | end_session   |
| 2       | 4          | 2019-07-20    | open_session  |
| 2       | 4          | 2019-07-21    | send_message  |
| 2       | 4          | 2019-07-21    | end_session   |
| 3       | 2          | 2019-07-21    | open_session  |
| 3       | 2          | 2019-07-21    | send_message  |
| 3       | 2          | 2019-07-21    | end_session   |
| 4       | 3          | 2019-06-25    | open_session  |
| 4       | 3          | 2019-06-25    | end_session   |
+---------+------------+---------------+---------------+
Output: 
+------------+--------------+ 
| day        | active_users |
+------------+--------------+ 
| 2019-07-20 | 2            |
| 2019-07-21 | 2            |
+------------+--------------+ 
# Explanation: Note that we do not care about days with zero active users.

code: 

SELECT activity_date AS day, COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE (activity_date > "2019-06-27" AND activity_date <= "2019-07-27")
GROUP BY activity_date

note
因為先用GROUP BY activity_date 所以在計算 COUNT(DISTINCT user_id) 可以將同一天出現不同的id做加總

其他解法：
SELECT 
    activity_date AS day,
    COUNT(DISTINCT user_id) AS active_users
FROM Activity
WHERE activity_date BETWEEN DATE_ADD('2019-07-27', INTERVAL -29 DAY) AND '2019-07-27'
GROUP BY activity_date

note 
DATE_ADD解釋 https://chat.openai.com/share/6664f52c-dcac-46ea-a574-6daf8cfe6961
DATE_ADD(date, INTERVAL quantity unit)
- date: 要進行加法操作的日期或時間值。
- quantity: 要添加的數量。可以是正數、負數或零。
- unit: 指定要添加的單位，如年（YEAR）、月（MONTH）、日（DAY）、小時（HOUR）、分鐘（MINUTE）等等。

SELECT DATE_ADD('2023-06-02', INTERVAL -1 YEAR); #結果為 "2022-06-02"
