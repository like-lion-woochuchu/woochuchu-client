# # https://www.acmicpc.net/problem/3190
import sys
input = sys.stdin.readline

n, k = int(input()), int(input())
game = [[0] * n for _ in range(n)]
apple = [list(map(int, input().split())) for _ in range(k)]
for i in range(len(apple)):
    game[apple[i][0]-1][apple[i][1]-1] = 1
turn = int(input())
turn_list = sorted([list(map(str, input().split()))
                    for _ in range(turn)], key=lambda x: int(x[0]))
sec = 0
body = [[0, 0]]
loc = 'East'
while True:
    if loc == 'East':
        sec += 1
        if [body[-1][0], body[-1][1]+1] not in body and 0 < body[-1][1]+1 < n:
            body.append([body[-1][0], body[-1][1]+1])
        else:
            print(sec)
            break
        if game[body[-1][0]][body[-1][1]] != 1:
            body.pop(0)
        else:
            game[body[-1][0]][body[-1][1]] = 0
        if len(turn_list) > 0:
            if sec == int(turn_list[0][0]):
                loc = 'South' if turn_list[0][1] == 'D' else 'North'
                turn_list.pop(0)
    elif loc == 'South':
        sec += 1
        if [body[-1][0]+1, body[-1][1]] not in body and 0 < body[-1][0]+1 < n:
            body.append([body[-1][0]+1, body[-1][1]])
        else:
            print(sec)
            break
        if game[body[-1][0]][body[-1][1]] != 1:
            body.pop(0)
        else:
            game[body[-1][0]][body[-1][1]] = 0
        if len(turn_list) > 0:
            if sec == int(turn_list[0][0]):
                loc = 'West' if turn_list[0][1] == 'D' else 'East'
                turn_list.pop(0)
    elif loc == 'North':
        sec += 1
        if [body[-1][0]-1, body[-1][1]] not in body and 0 <= body[-1][0]-1 < n:
            body.append([body[-1][0]-1, body[-1][1]])
        else:
            print(sec)
            break
        if game[body[-1][0]][body[-1][1]] != 1:
            body.pop(0)
        else:
            game[body[-1][0]][body[-1][1]] = 0
        if len(turn_list) > 0:
            if sec == int(turn_list[0][0]):
                loc = 'East' if turn_list[0][1] == 'D' else 'West'
                turn_list.pop(0)
    else:
        sec += 1
        if [body[-1][0], body[-1][1]-1] not in body and 0 <= body[-1][1]-1 < n:
            body.append([body[-1][0], body[-1][1]-1])
        else:
            print(sec)
            break
        if game[body[-1][0]][body[-1][1]] != 1:
            body.pop(0)
        else:
            game[body[-1][0]][body[-1][1]] = 0
        if len(turn_list) > 0:
            if sec == int(turn_list[0][0]):
                loc = 'North' if turn_list[0][1] == 'D' else 'South'
                turn_list.pop(0)
