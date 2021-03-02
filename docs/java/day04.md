---
title: 内置类简介(二)
date: 2021-03-02
tags:
 - 后端
---

## 数组

- **For-each循环**
```java
for(type element: array)
{
    System.out.println(element);
}
```

- **多维数组**

多维数组可以看成是数组的数组，比如二维数组就是一个特殊的一维数组，其每一个元素都是一个一维数组

- Array类

java.util.Arrays 类能方便地操作数组，它提供的所有方法都是静态的。
具有以下功能：
- 给数组赋值：通过 fill 方法。
- 对数组排序：通过 sort 方法,按升序。
- 比较数组：通过 equals 方法比较数组中元素值是否相等。
- 查找数组元素：通过 binarySearch 方法能对排序好的数组进行二分查找法操作。

<table class="reference">
	<tbody>
		<tr>
			<th style="width:76px;">
				序号</th>
			<th style="width:501px;">
				方法和说明</th>
		</tr>
		<tr>
			<td style="width:76px;">
				1</td>
			<td style="width:501px;">
				<strong>public static int binarySearch(Object[] a, Object key)</strong><br>
				用二分查找算法在给定数组中搜索给定值的对象(Byte,Int,double等)。数组在调用前必须排序好的。如果查找值包含在数组中，则返回搜索键的索引；否则返回 (-(<em>插入点</em>) - 1)。</td>
		</tr>
		<tr>
			<td style="width:76px;">
				2</td>
			<td style="width:501px;">
				<strong>public static boolean equals(long[] a, long[] a2)</strong><br>
				如果两个指定的 long 型数组彼此<em>相等</em>，则返回 true。如果两个数组包含相同数量的元素，并且两个数组中的所有相应元素对都是相等的，则认为这两个数组是相等的。换句话说，如果两个数组以相同顺序包含相同的元素，则两个数组是相等的。同样的方法适用于所有的其他基本数据类型（Byte，short，Int等）。</td>
		</tr>
		<tr>
			<td style="width:76px;">
				3</td>
			<td style="width:501px;">
				<strong>public static void fill(int[] a, int val)</strong><br>
				将指定的 int 值分配给指定 int 型数组指定范围中的每个元素。同样的方法适用于所有的其他基本数据类型（Byte，short，Int等）。</td>
		</tr>
		<tr>
			<td style="width:76px;">
				4</td>
			<td style="width:501px;">
				<strong>public static void sort(Object[] a)</strong><br>
				对指定对象数组根据其元素的自然顺序进行升序排列。同样的方法适用于所有的其他基本数据类型（Byte，short，Int等）。</td>
		</tr>
	</tbody>
</table>

## Date类

<table class="reference">
	<tbody>
		<tr>
			<th style="width:38px;">
				序号</th>
			<th style="width:538px;">
				方法和描述</th>
		</tr>
		<tr>
			<td style="width:38px;">
				1</td>
			<td style="width:538px;">
				<strong>boolean after(Date date)</strong><br>
				若当调用此方法的Date对象在指定日期之后返回true,否则返回false。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				2</td>
			<td style="width:538px;">
				<strong>boolean before(Date date)</strong><br>
				若当调用此方法的Date对象在指定日期之前返回true,否则返回false。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				3</td>
			<td style="width:538px;">
				<strong>Object clone( )</strong><br>
				返回此对象的副本。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				4</td>
			<td style="width:538px;">
				<strong>int compareTo(Date date)</strong><br>
				比较当调用此方法的Date对象和指定日期。两者相等时候返回0。调用对象在指定日期之前则返回负数。调用对象在指定日期之后则返回正数。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				5</td>
			<td style="width:538px;">
				<strong>int compareTo(Object obj)</strong><br>
				若obj是Date类型则操作等同于compareTo(Date) 。否则它抛出ClassCastException。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				6</td>
			<td style="width:538px;">
				<strong>boolean equals(Object date)</strong><br>
				当调用此方法的Date对象和指定日期相等时候返回true,否则返回false。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				7</td>
			<td style="width:538px;">
				<strong>long getTime( )</strong><br>
				返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				8</td>
			<td style="width:538px;">
				<strong>int hashCode( )</strong><br>
				&nbsp;返回此对象的哈希码值。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				9</td>
			<td style="width:538px;">
				<strong>void setTime(long time)</strong><br>
				&nbsp;<br>
				用自1970年1月1日00:00:00 GMT以后time毫秒数设置时间和日期。</td>
		</tr>
		<tr>
			<td style="width:38px;">
				10</td>
			<td style="width:538px;">
				<strong>String toString( )</strong><br>
				 把此 Date 对象转换为以下形式的 String： dow mon dd hh:mm:ss zzz yyyy 其中： dow 是一周中的某一天 (Sun, Mon, Tue, Wed, Thu, Fri, Sat)。</td>
		</tr>
	</tbody>
</table>

SimpleDateFormat 是一个以语言环境敏感的方式来格式化和分析日期的类。SimpleDateFormat 允许你选择任何用户自定义日期时间格式来运行。例如：
```
SimpleDateFormat ft = new SimpleDateFormat ("yyyy-MM-dd hh:mm:ss");
```

**格式化**

```java
import java.util.Date;
 
public class DateDemo {
 
  public static void main(String args[]) {
     // 初始化 Date 对象
     Date date = new Date();
 
     //c的使用  
    System.out.printf("全部日期和时间信息：%tc%n",date);          
    //f的使用  
    System.out.printf("年-月-日格式：%tF%n",date);  
    //d的使用  
    System.out.printf("月/日/年格式：%tD%n",date);  
    //r的使用  
    System.out.printf("HH:MM:SS PM格式（12时制）：%tr%n",date);  
    //t的使用  
    System.out.printf("HH:MM:SS格式（24时制）：%tT%n",date);  
    //R的使用  
    System.out.printf("HH:MM格式（24时制）：%tR",date);  
  }
}
// 全部日期和时间信息：星期一 九月 10 10:43:36 CST 2012  
// 年-月-日格式：2012-09-10  
// 月/日/年格式：09/10/12  
// HH:MM:SS PM格式（12时制）：10:43:36 上午  
// HH:MM:SS格式（24时制）：10:43:36  
// HH:MM格式（24时制）：10:43  
```

## 休眠(sleep)

sleep()使当前线程进入停滞状态（阻塞当前线程），让出CPU的使用、目的是不让当前线程独自霸占该进程所获的CPU资源，以留一定时间给其他线程执行的机会。
```
import java.util.*;
  
public class SleepDemo {
   public static void main(String args[]) {
      try { 
         System.out.println(new Date( ) + "\n"); 
         Thread.sleep(1000*3);   // 休眠3秒
         System.out.println(new Date( ) + "\n"); 
      } catch (Exception e) { 
          System.out.println("Got an exception!"); 
      }
   }
}
```

## Calendar类

Calendar类的功能要比Date类强大很多，而且在实现方式上也比Date类要复杂一些。

Calendar类是一个抽象类，在实际使用时实现特定的子类的对象，创建对象的过程对程序员来说是透明的，只需要使用getInstance方法创建即可。

Calendar类中用以下这些常量表示不同的意义，jdk内的很多类其实都是采用的这种思想

<table class="reference">
	<tbody>
<tr><th>常量</th><th>描述</th></tr>		
<tr><td>Calendar.YEAR</td><td>年份</td></tr>
<tr><td>Calendar.MONTH</td><td>月份</td></tr>
<tr><td>Calendar.DATE</td><td>日期</td></tr>
<tr><td>Calendar.DAY_OF_MONTH</td><td>日期，和上面的字段意义完全相同</td></tr>
<tr><td>Calendar.HOUR</td><td>12小时制的小时</td></tr>
<tr><td>Calendar.HOUR_OF_DAY</td><td>24小时制的小时</td></tr>
<tr><td>Calendar.MINUTE</td><td>分钟</td></tr>
<tr><td>Calendar.SECOND</td><td>秒</td></tr>
<tr><td>Calendar.DAY_OF_WEEK</td><td>星期几</td>
 </tr>
	</tbody>
</table>

```java
//创建一个代表2009年6月12日的Calendar对象
Calendar c1 = Calendar.getInstance();
c1.set(2009, 6 - 1, 12);
c1.set(Calendar.DATE,10);
c1.set(Calendar.YEAR,2008);
c1.add(Calendar.DATE, 10);
//把c1对象的日期加上10，也就是c1也就表示为10天后的日期，其它所有的数值会被重新计算

// 获得年份
int year = c1.get(Calendar.YEAR);
// 获得月份
int month = c1.get(Calendar.MONTH) + 1;
// 获得日期
int date = c1.get(Calendar.DATE);
// 获得小时
int hour = c1.get(Calendar.HOUR_OF_DAY);
// 获得分钟
int minute = c1.get(Calendar.MINUTE);
// 获得秒
int second = c1.get(Calendar.SECOND);
// 获得星期几（注意（这个与Date类是不同的）：1代表星期日、2代表星期1、3代表星期二，以此类推）
int day = c1.get(Calendar.DAY_OF_WEEK);

```

## GregorianCalendar类

Calendar类实现了公历日历，GregorianCalendar是Calendar类的一个具体实现。

Calendar 的getInstance（）方法返回一个默认用当前的语言环境和时区初始化的GregorianCalendar对象。GregorianCalendar定义了两个字段：AD和BC。这是代表公历定义的两个时代。

下面列出GregorianCalendar对象的几个构造方法：

<table class="reference">
	<tbody>
		<tr>
			<td style="width:47px;">
				<strong>序号</strong></td>
			<td style="width:529px;">
				<strong>构造函数和说明</strong></td>
		</tr>
		<tr>
			<td style="width:47px;">
				1</td>
			<td style="width:529px;">
				<strong>GregorianCalendar() </strong><br>
				在具有默认语言环境的默认时区内使用当前时间构造一个默认的 GregorianCalendar。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				2</td>
			<td style="width:529px;">
				<strong>GregorianCalendar(int year, int month, int date) </strong><br>
				在具有默认语言环境的默认时区内构造一个带有给定日期设置的 GregorianCalendar</td>
		</tr>
		<tr>
			<td style="width:47px;">
				3</td>
			<td style="width:529px;">
				<strong>GregorianCalendar(int year, int month, int date, int hour, int minute) </strong><br>
				为具有默认语言环境的默认时区构造一个具有给定日期和时间设置的 GregorianCalendar。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				4</td>
			<td style="width:529px;">
				<strong>GregorianCalendar(int year, int month, int date, int hour, int minute, int second) </strong><br>
				&nbsp; 为具有默认语言环境的默认时区构造一个具有给定日期和时间设置的 GregorianCalendar。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				5</td>
			<td style="width:529px;">
				<strong>GregorianCalendar(Locale aLocale) </strong><br>
				在具有给定语言环境的默认时区内构造一个基于当前时间的 GregorianCalendar。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				6</td>
			<td style="width:529px;">
				<strong>GregorianCalendar(TimeZone zone) </strong><br>
				在具有默认语言环境的给定时区内构造一个基于当前时间的 GregorianCalendar。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				7</td>
			<td style="width:529px;">
				<strong>GregorianCalendar(TimeZone zone, Locale aLocale) </strong><br>
				&nbsp;在具有给定语言环境的给定时区内构造一个基于当前时间的 GregorianCalendar。</td>
		</tr>
	</tbody>
</table>

这里是GregorianCalendar 类提供的一些有用的方法列表：
<table class="reference">
	<tbody>
		<tr>
			<td style="width:47px;">
				<strong>序号</strong></td>
			<td style="width:529px;">
				<strong>方法和说明</strong></td>
		</tr>
		<tr>
			<td style="width:47px;">
				1</td>
			<td style="width:529px;">
				<strong>void add(int field, int amount) </strong><br>
				根据日历规则，将指定的（有符号的）时间量添加到给定的日历字段中。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				2</td>
			<td style="width:529px;">
				<strong>protected void computeFields() </strong><br>
				转换UTC毫秒值为时间域值</td>
		</tr>
		<tr>
			<td style="width:47px;">
				3</td>
			<td style="width:529px;">
				<strong>protected void computeTime() </strong><br>
				覆盖Calendar ，转换时间域值为UTC毫秒值</td>
		</tr>
		<tr>
			<td style="width:47px;">
				4</td>
			<td style="width:529px;">
				<strong>boolean equals(Object obj) </strong><br>
				比较此 GregorianCalendar 与指定的 Object。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				5</td>
			<td style="width:529px;">
				<strong>int get(int field) </strong><br>
				获取指定字段的时间值</td>
		</tr>
		<tr>
			<td style="width:47px;">
				6</td>
			<td style="width:529px;">
				<strong>int getActualMaximum(int field) </strong><br>
				返回当前日期，给定字段的最大值</td>
		</tr>
		<tr>
			<td style="width:47px;">
				7</td>
			<td style="width:529px;">
				<strong>int getActualMinimum(int field) </strong><br>
				返回当前日期，给定字段的最小值</td>
		</tr>
		<tr>
			<td style="width:47px;">
				8</td>
			<td style="width:529px;">
				<strong>int getGreatestMinimum(int field) </strong><br>
				&nbsp;返回此 GregorianCalendar 实例给定日历字段的最高的最小值。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				9</td>
			<td style="width:529px;">
				<strong>Date getGregorianChange() </strong><br>
				获得格里高利历的更改日期。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				10</td>
			<td style="width:529px;">
				<strong>int getLeastMaximum(int field) </strong><br>
				返回此 GregorianCalendar 实例给定日历字段的最低的最大值</td>
		</tr>
		<tr>
			<td style="width:47px;">
				11</td>
			<td style="width:529px;">
				<strong>int getMaximum(int field) </strong><br>
				返回此 GregorianCalendar 实例的给定日历字段的最大值。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				12</td>
			<td style="width:529px;">
				<strong>Date getTime()</strong><br>
				获取日历当前时间。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				13</td>
			<td style="width:529px;">
				<strong>long getTimeInMillis() </strong><br>
				获取用长整型表示的日历的当前时间</td>
		</tr>
		<tr>
			<td style="width:47px;">
				14</td>
			<td style="width:529px;">
				<strong>TimeZone getTimeZone() </strong><br>
				获取时区。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				15</td>
			<td style="width:529px;">
				<strong>int getMinimum(int field) </strong><br>
				返回给定字段的最小值。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				16</td>
			<td style="width:529px;">
				<strong>int hashCode() </strong><br>
				重写hashCode.</td>
		</tr>
		<tr>
			<td style="width:47px;">
				17</td>
			<td style="width:529px;">
				<strong>boolean isLeapYear(int year)</strong><br>
				确定给定的年份是否为闰年。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				18</td>
			<td style="width:529px;">
				<strong>void roll(int field, boolean up) </strong><br>
				在给定的时间字段上添加或减去（上/下）单个时间单元，不更改更大的字段。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				19</td>
			<td style="width:529px;">
				<strong>void set(int field, int value) </strong><br>
				用给定的值设置时间字段。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				20</td>
			<td style="width:529px;">
				<strong>void set(int year, int month, int date) </strong><br>
				设置年、月、日的值。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				21</td>
			<td style="width:529px;">
				<strong>void set(int year, int month, int date, int hour, int minute) </strong><br>
				设置年、月、日、小时、分钟的值。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				22</td>
			<td style="width:529px;">
				<strong>void set(int year, int month, int date, int hour, int minute, int second) </strong><br>
				设置年、月、日、小时、分钟、秒的值。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				23</td>
			<td style="width:529px;">
				<strong>void setGregorianChange(Date date) </strong><br>
				设置 GregorianCalendar 的更改日期。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				24</td>
			<td style="width:529px;">
				<strong>void setTime(Date date) </strong><br>
				用给定的日期设置Calendar的当前时间。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				25</td>
			<td style="width:529px;">
				<strong>void setTimeInMillis(long millis) </strong><br>
				用给定的long型毫秒数设置Calendar的当前时间。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				26</td>
			<td style="width:529px;">
				<strong>void setTimeZone(TimeZone value) </strong><br>
				用给定时区值设置当前时区。</td>
		</tr>
		<tr>
			<td style="width:47px;">
				27</td>
			<td style="width:529px;">
				<strong>String toString() </strong><br>
				返回代表日历的字符串。</td>
		</tr>
	</tbody>
</table>

```java
import java.util.*;
  
public class GregorianCalendarDemo {
 
   public static void main(String args[]) {
      String months[] = {
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec"};
      
      int year;
      // 初始化 Gregorian 日历
      // 使用当前时间和日期
      // 默认为本地时间和时区
      GregorianCalendar gcalendar = new GregorianCalendar();
      // 显示当前时间和日期的信息
      System.out.print("Date: ");
      System.out.print(months[gcalendar.get(Calendar.MONTH)]);
      System.out.print(" " + gcalendar.get(Calendar.DATE) + " ");
      System.out.println(year = gcalendar.get(Calendar.YEAR));
      System.out.print("Time: ");
      System.out.print(gcalendar.get(Calendar.HOUR) + ":");
      System.out.print(gcalendar.get(Calendar.MINUTE) + ":");
      System.out.println(gcalendar.get(Calendar.SECOND));
      
      // 测试当前年份是否为闰年
      if(gcalendar.isLeapYear(year)) {
         System.out.println("当前年份是闰年");
      }
      else {
         System.out.println("当前年份不是闰年");
      }
   }
}
// Date: Apr 22 2009
// Time: 11:25:27
// 当前年份不是闰年
```

